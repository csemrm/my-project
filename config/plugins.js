module.exports = () => ({
        graphql: {
            enabled: true,
            config: {
                playgroundAlways: true,
                shadowCRUD: true,
                defaultLimit: 10,
                maxLimit: 100,
                apolloServer: {
                    tracing: true,
                },
            }
        },
        upload: {
            config: {
                provider: 'local',
                providerOptions: {
                    sizeLimit: 100000,
                },
            },
        },
        'wysiwyg': {
            enabled: true,
            resolve: './src/plugins/wysiwyg'
        },
    });

