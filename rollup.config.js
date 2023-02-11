import terser from '@rollup/plugin-terser';

const esConfig = {
    input: 'index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'es'
    },
    plugins: [terser({
        format: {
            comments: false,
            beautify: true
        },
        compress: false,
        mangle: false
    })]
}

const amdConfig = {
    input: 'index.js',
    output: {
        file: 'dist/bundle.amd.js',
        format: 'amd'
    },
    plugins: [terser({
        format: {
            comments: false,
            beautify: true
        },
        compress: false,
        mangle: false
    })]
}

const esMinConfig = {
    input: 'index.js',
    output: {
        file: 'dist/bundle.min.js',
        format: 'es',
    },
    plugins: [terser()]
}

const amdMinConfig = {
    input: 'index.js',
    output: {
        file: 'dist/bundle.amd.min.js',
        format: 'amd'
    },
    plugins: [terser()]
}

export default [
    esConfig,
    amdConfig,
    esMinConfig,
    amdMinConfig
];