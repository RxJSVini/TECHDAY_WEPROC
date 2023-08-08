import React from "react";

function ThemeIcon({ selectedTheme  }) {
    return (
          <div>
            {selectedTheme === 'dark' ? '🌞': '🌙'}
          </div>
    );
  }


export  {  ThemeIcon };