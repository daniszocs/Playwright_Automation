import {test} from '@playwright/test'

test.skip('Test One', async ({page}) => {


})


test('Not Yet Ready', async ({page}) => {

    test.fail()

})

test.fixme('To Be Fixed', async ({page}) => {


})

test('Slow Test', async ({page}) => {

    test.slow()

})

// test.only('Only This Test', async ({page}) => {



// })

test('skip this test', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on it');
});


//Tags
test('Test login page @smoke', async ({page}) => {
    
    // ...
})