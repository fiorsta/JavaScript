let gulp = require('gulp'),
    bs = require('browser-sync'),
    minifyJs = require('gulp-terser'),
    autoPrefixer = require('gulp-autoprefixer'),
    htmlMin = require('gulp-htmlmin'),
    jsonMin = require('gulp-jsonmin'),
    rename = require('gulp-rename'),
    delFiles = require('del'),
    imageMin = require('gulp-imagemin'),
    cssMinify = require('gulp-csso');

gulp.task('html',() => {
    return gulp.src('app/html/index.html')
    .pipe(htmlMin({
        collapseWhitespace:true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', () => {
    return gulp.src('app/css/*.css')
    .pipe(autoPrefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(cssMinify())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('js', () => {
    return gulp.src('app/js/**/*.js')
    .pipe(minifyJs())
    .pipe(rename({
        suffix:'.min'
    }))
    .pipe(gulp.dest('dist/js'))
})


gulp.task('image', () => {
    return gulp.src('app/src/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('dist/images'))
});

gulp.task('json', () => {
    return gulp.src('app/src/*.json')
    .pipe(jsonMin())
    .pipe(gulp.dest('dist'))
});

gulp.task('clean', () => {
    return delFiles('dist');
});

gulp.task('server', () => {
    return bs({
        server: {
            baseDir: 'dist'
        }
    })
});

gulp.task('css:watch', () => {
   return gulp.watch('app/css/**/*.css', gulp.series('css', (done) => {
       bs.reload();
       done()
   })) 
});

gulp.task('default', gulp.series(
'clean',
gulp.parallel('css','html','js','image','json'), gulp.parallel('css:watch','server')
));