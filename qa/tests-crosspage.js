var Browser = require('zombie');
var assert = require('chai').assert;

var browser;

suite('Cross-Page Tests', () => {
    setup(() => {
        browser = new Browser();
    });
    test('requesting a group rate quote from the hood river tour page should populate the referrer field', (done) => {
        var referrer = 'http://localhost:2333/tours/hood-river';
        browser.visit(referrer, () => {
            browser.clickLink('.requestGroupRate', () => {
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });
    test('requesting a group rate quote from the oregon coast tour page should populate the referrer field', (done) => {
        var referrer = 'http://localhost:2333/tours/oregon-coast';
        browser.visit(referrer, () => {
            browser.clickLink('.requestGroupRate', () => {
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });
    test('visiting the "request group rate" page dirctly should result in an empty referrer field', (done) => {
        var referrer = 'http://localhost:2333/tours/request-group-rate';
        browser.visit(referrer, () => {
            assert(browser.field('referrer').value === '');
            done();
        });
    });
});

// test command: mocha -u tdd -R spec qa/tests-crosspage.js