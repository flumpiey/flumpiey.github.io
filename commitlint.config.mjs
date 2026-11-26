const AI_ATTRIBUTION =
  /^\s*(co-authored-by:.*(claude|anthropic|cursor|openai|codex|copilot|gemini|opencode)|claude-session:)|generated with \[?(claude|cursor|codex|copilot|gemini|opencode)|(claude\.ai|claude\.com)\/code/im;

export default {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'no-ai-attribution': ({ raw }) => [
          !AI_ATTRIBUTION.test(raw ?? ''),
          'remove AI attribution (Co-Authored-By AI trailers, "Generated with ..." lines, Claude-Session lines)',
        ],
      },
    },
  ],
  rules: {
    'header-max-length': [2, 'always', 100],
    'body-max-line-length': [2, 'always', 150],
    'no-ai-attribution': [2, 'always'],
  },
};
