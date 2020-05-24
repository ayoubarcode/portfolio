import React from 'react';
import TagTechno from './TagTechno';
const Tags = ({ tagsTechno }) => {
  return (
    <p className="text-center">
      {tagsTechno.map((tag) => (
        <TagTechno key={tag.id} tag={tag} />
      ))}
    </p>
  );
};

export default Tags;
