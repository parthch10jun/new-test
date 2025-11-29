"use client"

import { useEffect, useState } from "react"

const WindowsCursorSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 32 32" // Standard viewBox for the SVG design
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }} // Ensures SVG scales correctly within its container
  >
    {/* White cursor outline - thicker for better visibility */}
    <path
      d="M6 3L14.5 25.5L19 15L29 13L6 3Z"
      fill="white"
      stroke="white"
      strokeWidth="2" // Increased stroke for outline
      strokeLinejoin="round"
    />
    {/* Black cursor border */}
    <path
      d="M6 3L14.5 25.5L19 15L29 13L6 3Z"
      fill="none"
      stroke="black"
      strokeWidth="1" // Standard border
      strokeLinejoin="round"
    />
    {/* Black cursor fill - slightly inset to show border */}
    <path
      d="M7 5L14.5 24L18.2 15L27 13.5L7 5Z"
      fill="black"
    />
  </svg>
)

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth > 768)
    checkDesktop()
    window.addEventListener("resize", checkDesktop)
    return () => window.removeEventListener("resize", checkDesktop)
  }, [])

  useEffect(() => {
    if (!isDesktop) {
      setHidden(true); // Ensure cursor is hidden if not desktop
      return;
    }

    const onMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY })
    const onMouseDown = () => setClicked(true)
    const onMouseUp = () => setClicked(false)
    const onMouseLeave = () => setHidden(true)
    const onMouseEnter = () => setHidden(false)

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [isDesktop])

  useEffect(() => {
    if (!isDesktop) return;

    const handleLinkHover = (event) => setLinkHovered(event.type === 'mouseover');
    
    // Function to attach events to current and future links/buttons
    const updateLinkListeners = () => {
      const links = document.querySelectorAll('a, button, .interactive-card');
      links.forEach((el) => {
        el.removeEventListener('mouseover', handleLinkHover); // Remove to avoid duplicates
        el.removeEventListener('mouseout', handleLinkHover);
        el.addEventListener('mouseover', handleLinkHover);
        el.addEventListener('mouseout', handleLinkHover);
      });
    };

    updateLinkListeners(); // Initial attachment

    const observer = new MutationObserver(updateLinkListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.querySelectorAll('a, button, .interactive-card').forEach((el) => {
        el.removeEventListener('mouseover', handleLinkHover);
        el.removeEventListener('mouseout', handleLinkHover);
      });
      observer.disconnect();
    };
  }, [isDesktop]);

  if (!isDesktop || hidden) return null; // Render nothing if not desktop or hidden

  const baseSize = 32; // Corresponds to SVG viewBox
  let currentScale = 1;
  if (linkHovered) currentScale = 1.5; // More pronounced hover scale
  if (clicked) currentScale = 0.8;   // More pronounced click scale

  const cursorStyle = {
    position: 'fixed',
    left: `${position.x}px`, // Tip of the arrow will be at mouse position
    top: `${position.y}px`,  // Tip of the arrow will be at mouse position
    width: `${baseSize * currentScale}px`,
    height: `${baseSize * currentScale}px`,
    opacity: 1, // Controlled by the parent conditional rendering
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(0, 0)', // SVG tip is (0,0) relative to mouse
    transition: 'width 0.07s ease-out, height 0.07s ease-out', // Faster transition
  };

  return (
    <div style={cursorStyle}>
      <WindowsCursorSVG />
    </div>
  );
}
