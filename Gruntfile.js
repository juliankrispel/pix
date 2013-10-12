module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-testem');
    grunt.initConfig({
        testem: {
            options : {
                launch_in_dev : ['Chrome']
            },
            main : {
                src: [ 'tests/*.coffee' ]
            }
        },
        coffee:{
            compileJoined: {
                options: {
                    join: true
                },
                files: {
                    'js/main.js': [
                        'coffee/*.coffee', 
                    ],
                    'js/test.js': [
                        'tests/*.coffee',
                    ]
                }
            },
        },
        watch: {
            coffee: {
                files: ['coffee/*.coffee', 'tests/*.coffee'],
                tasks: 'coffee'
            }
        }
    });
    grunt.registerTask('default',[
        'coffee', 'watch'
    ]);
}
