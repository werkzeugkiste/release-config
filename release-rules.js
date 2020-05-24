module.exports = [
    { breaking: true, release: 'major' },
    { revert: true, release: 'patch' },
    // MINOR
    { type: 'feat', release: 'minor' },
    { type: 'feature', release: 'minor' },
    // PATCH
    { type: 'fix', release: 'patch' },
    { type: 'bugfix', release: 'patch' },
    { type: 'hotfix', release: 'patch' },
    { type: 'chore', release: 'patch' },
    { type: 'perf', release: 'patch' },
    { type: 'refactor', release: 'patch' },
    { type: 'improvement', release: 'patch' },
    { type: 'revert', release: 'patch' },
    { type: 'style', release: 'patch' },
    { type: 'docs', release: 'patch' },
    { type: 'ci', release: 'patch' },
    { type: 'test', release: 'patch' },
    // NO RELEASE
    { type: 'ci', release: false },
    { type: 'build', release: false },
    { type: 'release', release: false },
    { scope: 'no-release', release: false },
];
