import React, { useMemo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  tomorrow,
  dracula,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../hooks/useTheme';

interface SyntaxHighlighterProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  customStyle?: React.CSSProperties;
}

export const SyntaxHighlighterComponent: React.FC<SyntaxHighlighterProps> =
  React.memo(
    ({ code, language = 'jsx', showLineNumbers = true, customStyle }) => {
      const { isDark } = useTheme();

      const theme = useMemo(() => (isDark ? dracula : tomorrow), [isDark]);

      const style = useMemo(
        () => ({
          margin: 0,
          borderRadius: 0,
          fontSize: '14px',
          lineHeight: '1.5',
          ...customStyle,
        }),
        [customStyle]
      );

      return (
        <SyntaxHighlighter
          language={language}
          style={theme}
          showLineNumbers={showLineNumbers}
          customStyle={style}
          wrapLines={true}
          lineNumberStyle={{
            minWidth: '3em',
            paddingRight: '1em',
            textAlign: 'right',
            userSelect: 'none',
            color: isDark ? '#6b7280' : '#9ca3af',
          }}
        >
          {code}
        </SyntaxHighlighter>
      );
    }
  );

SyntaxHighlighterComponent.displayName = 'SyntaxHighlighterComponent';
