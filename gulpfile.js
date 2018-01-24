/**
/*!
 * gulp
 * npm install -g gulp
 * $ npm install gulp gulp-ruby-sass  gulp-cached gulp-uglify gulp-rename gulp-concat gulp-notify gulp-filter gulp-jshint gulp-rev-append gulp-cssnano gulp-imagemin browser-sync gulp-file-include gulp-autoprefixer del  gem install sass --save-dev
 */

// Load plugins
var gulp = require("gulp"), // ����������gulp���
    del = require("del"), // �ļ�ɾ��
    sass = require("gulp-ruby-sass"), // sass ����
    cached = require("gulp-cached"), // ���浱ǰ�����е��ļ���ֻ�����޸ĵ��ļ�ͨ���ܵ�
    uglify = require("gulp-uglify"), // js ѹ��
    rename = require("gulp-rename"), // ������
    concat = require("gulp-concat"), // �ϲ��ļ�
    notify = require("gulp-notify"), // �൱�� console.log()
    filter = require("gulp-filter"), // ����ɸѡָ���ļ�
    jshint = require("gulp-jshint"), // js �﷨У��
    rev = require("gulp-rev-append"), // �����ļ�ָ�ƣ�MD5��
    cssnano = require("gulp-cssnano"), // CSS ѹ��
    imagemin = require("gulp-imagemin"), // ͼƬ�Ż�
    browserSync = require("browser-sync"), // �����Զ�ˢ��
    fileinclude = require("gulp-file-include"), // ���� include html �ļ�
    autoprefixer = require("gulp-autoprefixer"), // ��� CSS �����ǰ׺
    // postcss = require('gulp-postcss'),
    fs = require("fs"),
    path = require("path"),
    merge = require("merge-stream"),
    gutil = require("gulp-util");

var scriptsPath = "src/js";
var distPath = "dist";

function getFolders(dir) {
    return fs.readdirSync(dir).filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
    });
}

// sass
gulp.task("sass", function() {
    return sass("src/sass/**/*.scss", { style: "expanded" }) // ���� sass Ŀ¼����Ŀ¼�µ����� .scss �ļ������ļ���ͨ���ܵ������������ʽ
        .pipe(cached("sass")) // ���洫���ļ���ֻ�����޸ĵ��ļ�ͨ���ܵ�����һ��ִ����ȫ��ͨ������Ϊ��û�м�¼���棩
        .pipe(
            autoprefixer({
                browsers: ["last 6 versions"]
            })
        )

        .pipe(gulp.dest("dist/css")) // ����� dist/css Ŀ¼�£���Ӱ���ʱ�ܵ�����ļ�����
        .pipe(rename({ suffix: ".min" })) // �Թܵ�����ļ������ .min ��������
        .pipe(cssnano()) // ѹ�� CSS
        .pipe(gulp.dest("dist/css")); // ����� dist/css Ŀ¼�£���ʱÿ���ļ�����ѹ����*.min.css����δѹ��(*.css)�����汾
});

// css ������ *.min.css������ CSS �����ѹ����δѹ�������汾��
gulp.task("css", function() {
    return gulp
        .src("src/css/**/*.css")
        .pipe(cached("css"))
        .pipe(gulp.dest("dist/css")) // �ѹܵ���������ļ������ dist/css Ŀ¼
        .pipe(filter(["**/*", "!**/*.min.css"])) // ɸѡ���ܵ��еķ� *.min.css �ļ�
        .pipe(
            autoprefixer({
                browsers: ["last 6 versions"],
                cascade: false
            })
        )
        .pipe(gulp.dest("dist/css")) // �Ѵ������ css ����� dist/css Ŀ¼
        .pipe(rename({ suffix: ".min" }))
        .pipe(cssnano())
        .pipe(gulp.dest("dist/css"));
});

// styleReload ����� watch ������ˢ��CSSע�룩
gulp.task("styleReload", ["sass", "css"], function() {
    return gulp
        .src(["dist/css/**/*.css"])
        .pipe(cached("style"))
        .pipe(browserSync.reload({ stream: true })); // ʹ����ˢ�� browserSync ע�� CSS
});

// script ������ *.min.js������ js �����ѹ����δѹ�������汾��
gulp.task("script", function() {
    return (gulp
            .src(["src/js/**/*.js"])
            .pipe(cached("script"))
            .pipe(gulp.dest("dist/js"))
            .pipe(filter(["**/*", "!**/*.min.js"])) // ɸѡ���ܵ��еķ� *.min.js �ļ�
            // .pipe(jshint('.jshintrc')) // js��У����ϲ���������Ҫ����
            // .pipe(jshint.reporter('default'))
            // .pipe(concat('main.js'))
            // .pipe(gulp.dest('dist/js'))
            // .pipe(rename({ suffix: ".min" }))
            // .pipe(uglify())
            .on("error", function(err) {
                gutil.log(gutil.colors.red("[Errors]"), err.toString());
            })
            .pipe(gulp.dest("./dist/js")) );
    // .pipe(livereload()) );
});

// image
gulp.task("image", function() {
    return (gulp
            .src("src/images/**/*.{jpg,jpeg,png,gif}")
            .pipe(cached("images"))
            .pipe(
                imagemin({
                    optimizationLevel: 3,
                    progressive: true,
                    interlaced: true,
                    multipass: true
                })
            )
            // ȡֵ��Χ��0-7���Ż��ȼ���,�Ƿ�����ѹ��jpgͼƬ���Ƿ����ɨ��gif������Ⱦ���Ƿ����Ż�svgֱ����ȫ�Ż�
            .pipe(gulp.dest("dist/images")) );
});

// html ���� html �ļ�����������
gulp.task("html", function() {
    return gulp
        .src("src/*/*.html")
        .pipe(fileinclude()) // include html
        .pipe(rev()) // ���ɲ����� MD5
        .pipe(gulp.dest("dist"));
});

// ��������
gulp.task("font", function() {
    return gulp
        .src("src/fonts/**/*{.eot,svg,ttf,woff,woff2}")
        .pipe(cached("fonts"))
        .pipe(gulp.dest("dist/fonts"));
});

// clean ��� dist Ŀ¼
gulp.task("clean", function() {
    return del("dist/**/*");
});

// build������ִ��ȫ����������
gulp.task("build", ["sass", "css", "script", "image", "font"], function() {
    gulp.start("html");
});

// default Ĭ�����������������
gulp.task("default", ["clean"], function() {
    gulp.start("build");
});

// watch ����ط�����������
gulp.task("watch", function() {
    browserSync.init({
        server: {
            baseDir: "dist" // �� dist Ŀ¼������ط������������Զ���Ĭ�������
        },
        browser: "chrome"
    });

    // ��� SASS �ļ����б䶯��ִ��CSSע��
    gulp.watch("src/sass/**/*.scss", ["styleReload"]);
    // ��� CSS �ļ����б䶯��ִ��CSSע��
    gulp.watch("src/css/**/*.css", ["styleReload"]);
    // ��� js �ļ����б䶯��ִ�� script ����
    gulp.watch("src/js/**/*.js", ["script"]);
    // ���ͼƬ�ļ����б䶯��ִ�� image ����
    gulp.watch("src/images/**/*", ["image"]);
    // ��������ļ����б䶯��ִ�� font ����
    gulp.watch("src/fonts/**/*", ["fonts"]);
    // ��� html �ļ����б䶯��ִ�� html ����
    gulp.watch("src/**/*.html", ["html"]);
    // ��� dist Ŀ¼�³� css Ŀ¼����ı䶯����js��ͼƬ�ȣ������Զ�ˢ��ҳ��
    gulp
        .watch(["dist/**/*", "!dist/css/**/*"])
        .on("change", browserSync.reload);
});
