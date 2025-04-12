import React, { useState } from 'react';

const LanguageSelector = ({ selectedLanguages = [], onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const commonLanguages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Russian',
    'Chinese (Mandarin)', 'Japanese', 'Korean', 'Arabic', 'Hindi', 'Dutch', 'Greek',
    'Turkish', 'Swedish', 'Polish', 'Danish', 'Norwegian', 'Finnish', 'Thai', 'Vietnamese'
  ];
  
  const filteredLanguages = commonLanguages.filter(
    lang => lang.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSelect = (language) => {
    if (!selectedLanguages.includes(language)) {
      const newSelected = [...selectedLanguages, language];
      onChange(newSelected);
    }
    setSearchTerm('');
  };
  
  const handleRemove = (language) => {
    const newSelected = selectedLanguages.filter(lang => lang !== language);
    onChange(newSelected);
  };

  return (
    <div>
      <div className="relative mb-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Search languages..."
        />
        
        {searchTerm && (
          <div className="absolute z-10 bg-white border rounded mt-1 w-full max-h-60 overflow-y-auto shadow-lg">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => (
                <div
                  key={lang}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(lang)}
                >
                  {lang}
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-500">No languages found</div>
            )}
          </div>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {selectedLanguages.map((language) => (
          <div
            key={language}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
          >
            <span className="mr-1">{language}</span>
            <button
              type="button"
              onClick={() => handleRemove(language)}
              className="text-blue-600 hover:text-blue-800"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
