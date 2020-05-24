// We're releasing an app. No need to publish it to npm
// This is untested and WIP
module.exports = {
    branch: 'master',
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'conventionalcommits',
                releaseRules: require('./release-rules.js'),
            },
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                // Using conventionalcommits here since the angular preset does not allow custom
                // types for release notes generation.
                preset: 'conventionalcommits',
                presetConfig: {
                    types: require('./release-note-types.js'),
                },
            },
        ],
        '@semantic-release/changelog',
        [
            '@semantic-release/npm',
            {
                npmPublish: false,
            },
        ],
        '@semantic-release/github',
        '@semantic-release/git',
    ],
    verifyConditions: [
        '@semantic-release/github',
        '@semantic-release/git',
        '@semantic-release/npm',
    ],
    prepare: [
        '@semantic-release/changelog',
        '@semantic-release/npm',
        {
            path: '@semantic-release/git',
            message:
                // TODO: Check if [skip release] should also be added here
                // (e.g. if the release is not pushed back to the _master_ branch)
                'release: <%= nextRelease.version %> - <%= new Date().toISOString() %> [skip ci]\n\n<%= nextRelease.notes %>',
        },
    ],
};
