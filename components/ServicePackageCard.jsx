import React from 'react';

const ServicePackageCard = ({ packageData }) => {
  if (!packageData) return null;

  return (
    <div className="glass-card p-6 rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-primary mb-2">{packageData.name}</h3>
      {packageData.duration && <p className="text-muted-foreground mb-1"><strong className="text-foreground">Duration:</strong> {packageData.duration}</p>}
      {packageData.keyArtefacts && packageData.keyArtefacts.length > 0 && (
        <div className="mt-3">
          <p className="text-foreground font-medium mb-1">Key Deliverables:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
            {packageData.keyArtefacts.map((artefact, index) => (
              <li key={index}>{artefact}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServicePackageCard;
