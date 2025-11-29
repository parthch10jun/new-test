"use client"

import * as React from "react"

const TOAST_LIMIT = 3 // Allow multiple custom toasts
const TOAST_REMOVE_DELAY = 5000 // Auto-dismiss after 5 seconds

const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST",
    ADD_CUSTOM_TOAST: "ADD_CUSTOM_TOAST",
    DISMISS_CUSTOM_TOAST: "DISMISS_CUSTOM_TOAST",
    REMOVE_CUSTOM_TOAST: "REMOVE_CUSTOM_TOAST",
}

let count = 0
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER
    return count.toString()
}

const toastTimeouts = new Map()

const addToRemoveQueue = (toastId, isCustom = false) => {
    if (toastTimeouts.has(toastId)) {
        return
    }

    const timeout = setTimeout(() => {
        toastTimeouts.delete(toastId)
        const actionType = isCustom ? "REMOVE_CUSTOM_TOAST" : "REMOVE_TOAST"
        dispatch({ type: actionType, toastId })
    }, TOAST_REMOVE_DELAY)

    toastTimeouts.set(toastId, timeout)
}

export const reducer = (state, action) => {
    switch (action.type) {
        // Standard Toasts
        case actionTypes.ADD_TOAST:
            return {
                ...state,
                toasts: [action.toast, ...state.toasts].slice(0, 1), // Keep limit for standard
            }
        case actionTypes.DISMISS_TOAST:
            // ... (existing logic)
            return state
        case actionTypes.REMOVE_TOAST:
            // ... (existing logic)
            return state

        // Custom Toasts
        case actionTypes.ADD_CUSTOM_TOAST:
            return {
                ...state,
                customToasts: [action.toast, ...state.customToasts].slice(0, TOAST_LIMIT),
            }
        case actionTypes.DISMISS_CUSTOM_TOAST:
            return {
                ...state,
                customToasts: state.customToasts.filter((t) => t.id !== action.toastId),
            }
        case actionTypes.REMOVE_CUSTOM_TOAST:
            return {
                ...state,
                customToasts: state.customToasts.filter((t) => t.id !== action.toastId),
            }

        default:
            return state
    }
}

const listeners = []
let memoryState = { toasts: [], customToasts: [] }

function dispatch(action) {
    memoryState = reducer(memoryState, action)
    listeners.forEach((listener) => {
        listener(memoryState)
    })
}

// Standard toast function (remains unchanged)
function toast(props) {
    const id = genId()
    const dismiss = () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id })
    dispatch({
        type: actionTypes.ADD_TOAST,
        toast: { ...props, id, open: true, onOpenChange: (open) => !open && dismiss() },
    })
    return { id, dismiss }
}

// New custom toast function
function customToast(props) {
    const id = genId()
    const dismiss = () => dispatch({ type: actionTypes.DISMISS_CUSTOM_TOAST, toastId: id })

    dispatch({
        type: actionTypes.ADD_CUSTOM_TOAST,
        toast: {
            ...props,
            id,
            onDismiss: dismiss,
        },
    })

    // Auto-dismiss after duration
    if (props.duration !== null) {
        addToRemoveQueue(id, true)
    }

    return { id, dismiss }
}

function useToast() {
    const [state, setState] = React.useState(memoryState)

    React.useEffect(() => {
        listeners.push(setState)
        return () => {
            const index = listeners.indexOf(setState)
            if (index > -1) {
                listeners.splice(index, 1)
            }
        }
    }, [state])

    return {
        ...state,
        toast,
        customToast, // Expose the new function
        dismiss: (toastId) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
        dismissCustom: (toastId) => dispatch({ type: actionTypes.DISMISS_CUSTOM_TOAST, toastId }),
    }
}

export { useToast, toast, customToast }
