import {test, expect} from '@playwright/test';


//  Definir imagen de referencia

test('Definir referencia: ARGENTINA', async({page}) =>{


    // Aceptar Cookies para que el popup no moleste en la captura
    await page.addLocatorHandler(
        page.getByRole("button", { name: "Aceptar todas las cookies" }),
        async () => {
            await page.getByRole("button", { name: "Aceptar todas las cookies" }).click()
        }
    )


    //Dirigirnos a la página a comparar

        await page.goto('https://www.purina.com.ar/fancy-feast');

    //Definir qué elemento queremos comparar con los demás

    const footerArgentinaReference = page.getByRole('navigation', {name:'Menu Footer Fancy Feast'});

    //Crear el screenshot (de ese elemento)

    await expect(footerArgentinaReference).toHaveScreenshot('footerArgentina.png');


})


test('Comparación Argentina vs Brasil | Footer Fancyfeast', async({page})=>{



    //  Para este punto realizaremos la comparación:
    // Compararemos diferencia entre footers

    await page.addLocatorHandler(
        page.getByRole("button", { name: "Aceptar todas las cookies" }),
        async () => {
            await page.getByRole("button", { name: "Aceptar todas las cookies" }).click()
        }
    )




        // Iremos a la pagina correspondiente a comparar
    await page.goto('https://www.purina.com.br/fancy-feast');



//  Tomaermos el footer como referencia. También se puede utilizar page.locator. Mirar en la documentacion anexada.
    const footerBrasilReference = page.getByRole('navigation', {name:'Menu Footer Fancy Feast'});

    //ASERCIÖN tomando al footer BR vs footer ARG (Podría validarse contra todos los demás países)

    //Nota: La captura quizas no está siendo tomada correctamente en cuestión de medidas pero puede ser por el locator. Averiguar.

    expect(await footerBrasilReference.screenshot()).toMatchSnapshot('footerArgentina.png')

})