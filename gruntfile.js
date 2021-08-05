module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      options: {},
      dist: {
        src: [
          "assets/scripts/app/plugins/fa.js",
          "assets/scripts/app/plugins/jquery.js",
          "assets/scripts/app/changelog.js",
          "assets/scripts/app/data.js",
          "assets/scripts/app/menu.js",
          "assets/scripts/app/functions/*",
          "assets/scripts/app/pages/*",
          "assets/scripts/app/popup.js",
        ],

        dest: "assets/scripts/renderer/app.js",
      },
    },
    // uglify: {
    //   app: {
    //     src: "assets/scripts/renderer/app.js",
    //     dest: "assets/scripts/renderer/app.min.js",
    //   },
    // },
  });
  //   grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.registerTask("default", ["concat"]);
};
