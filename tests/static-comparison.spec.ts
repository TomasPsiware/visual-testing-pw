import {test, expect} from '@playwright/test';

//  Comparación Estática; es decir: DISEÑO VS Página
// Para tomar esta comparación estática primero debemos crear una carpeta en ./tests/"igualqueelscript"/"nombrecaptura.jpg"
// Una vez tengamos esta carpeta, ya está definido el screenshot a comparar (Diseño)
// Si bien tenemos el diseño, ahora debemos entrar a la pagina y luego, si ya, comparar el diseño con la pagina

test('Si estoy funciona, estaria bueno', async({page})=>{

    await page.addLocatorHandler(
        page.getByRole("button", { name: "Aceptar todas las cookies" }),
        async () => {
            await page.getByRole("button", { name: "Aceptar todas las cookies" }).click()
        }
    )

    await page.goto('https://purinalatam.com/');


    // const footerBrasilReference = page.getByRole('navigation', {name:'Menu Footer Fancy Feast'});

    //ASERCIÖN 

    expect(await page.screenshot()).toMatchSnapshot('comparacionestatica.png')

})

