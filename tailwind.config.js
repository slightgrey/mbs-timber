import typography from '@tailwindcss/typography'

export default {
  content: [
    './theme/views/**/*.twig',
    './theme/blocks/**/*.twig',
  ],
  safelist: [
    // Layout
    'container', 'block', 'inline-block', 'inline', 'flex', 'inline-flex', 'grid', 'inline-grid',
    'flow-root', 'contents', 'list-item', 'hidden',
    
    // Flexbox & Grid
    'flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse',
    'flex-wrap', 'flex-wrap-reverse', 'flex-nowrap',
    'flex-1', 'flex-auto', 'flex-initial', 'flex-none',
    'justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-around', 'justify-evenly',
    'items-start', 'items-end', 'items-center', 'items-baseline', 'items-stretch',
    
    // Grid classes with pattern matching
    {
      pattern: /^grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)$/,
    },
    {
      pattern: /^gap-(0|1|2|3|4|5|6|8|10|12|16|20|24)$/,
    },
    {
      pattern: /^gap-(x|y)-(2|4|6|8)$/,
    },
    
    // Spacing with pattern matching
    {
      pattern: /^m(|x|y|t|r|b|l)-(0|1|2|3|4|5|6|8|10|12|16|20|24)$/,
    },
    {
      pattern: /^p(|x|y|t|r|b|l)-(0|1|2|3|4|5|6|8|10|12|16|20|24)$/,
    },
    'mx-auto',
    
    // Typography
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl',
    'font-thin', 'font-extralight', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black',
    'text-left', 'text-center', 'text-right', 'text-justify',
    'leading-none', 'leading-tight', 'leading-snug', 'leading-normal', 'leading-relaxed', 'leading-loose',
    'tracking-tighter', 'tracking-tight', 'tracking-normal', 'tracking-wide', 'tracking-wider', 'tracking-widest',
    
    // Colors with pattern matching
    {
      pattern: /^text-(black|white|gray-(50|100|200|300|400|500|600|700|800|900)|red-(500|600|700)|blue-(500|600|700)|green-(500|600|700)|yellow-(500|600|700))$/,
    },
    {
      pattern: /^bg-(transparent|black|white|gray-(50|100|200|300|400|500|600|700|800|900)|red-(500|600|700)|blue-(500|600|700)|green-(500|600|700)|yellow-(400|500|600))$/,
    },
    
    // Borders & Radius
    'border', 'border-0', 'border-2', 'border-4', 'border-8',
    'border-t', 'border-r', 'border-b', 'border-l',
    'border-gray-200', 'border-gray-300', 'border-gray-400', 'border-gray-500',
    'rounded', 'rounded-none', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-full',
    
    // Effects
    'shadow', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl', 'shadow-none',
    'opacity-0', 'opacity-25', 'opacity-50', 'opacity-75', 'opacity-100',
    'hover:opacity-75', 'hover:opacity-100', 'hover:shadow-lg',
    'transition', 'transition-all', 'transition-colors', 'transition-opacity', 'transition-shadow', 'transition-transform',
    'duration-75', 'duration-100', 'duration-150', 'duration-200', 'duration-300', 'duration-500', 'duration-700', 'duration-1000',
    
    // Interactive
    'cursor-auto', 'cursor-default', 'cursor-pointer', 'cursor-wait', 'cursor-text', 'cursor-move', 'cursor-not-allowed',
    'select-none', 'select-text', 'select-all', 'select-auto',
    
    // Responsive and state variants
    {
      pattern: /^(sm|md|lg|xl|2xl):(block|flex|grid|hidden|text-(xs|sm|base|lg|xl|2xl|3xl))$/,
    },
    {
      pattern: /^hover:(opacity-(75|100)|shadow-lg)$/,
    }
  ],
  theme: { 
    extend: {
      fontFamily: {
        'sans': ['Lexend', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif'],
      },
    }
  },
  plugins: [
    typography,
  ],
}
