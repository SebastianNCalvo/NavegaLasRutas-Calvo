const products = [
    {
        id: 1,
        category: "alfajor",
        title: "Alfajor triple Milka Oreo 61gr",
        price: 1200,
        img: "/imgs/alfajor-oreo.jpg",
        cantidad: 1,
        stock: 50, 
        description: "¿Te Tentaste? Disfrutá Del Más Rico Alfajor MILKA Donde Prefieras. Gestos Tiernos Hay Muchos, Pero Si Los Compartimos, Habría Muchísimos Más. #Laternuranosune. MARCA: MILKA. SIN TACC: NO"
    },
    {
        id: 2,
        category: "alfajor",
        title: "Alfajor triple Pepitos 57gr",
        price: 1200,
        img: "/imgs/alfajor-pepito.jpg",
        cantidad: 1,
        stock: 50, 
        description:"Para Los Amantes De Las Chispas De Chocolate Alfajor PEPITOS Triple. Un Clásico De Los Argentinos Para Compartir O Regalar, Que No Puede Faltar En Tu Casa. ¡No Te Olvides De Agregarlo Al Carrito! MARCA: PEPITOS. SIN TACC: NO"
    },
    {
        id: 3,
        category: "alfajor",
        title: "Alfajor Terrabusi clasico 50gr",
        price: 850,
        img: "/imgs/alfajor-terrabusi.jpg",
        cantidad: 1,
        stock: 50, 
        description:"Disfrutá Del Clásico Alfajor Triple TERRABUSI De Dulce De Leche Como Más Te Gusta. De Una Merienda Improvisada, Puede Quedar Una Gran Anécdota Para La Historia. ¡Por Más Historias De Merienda! MARCA: TERRABUSI. SIN TACC: NO"
    },
    {
        id: 4,
        category: "alfajor",
        title: "Alfajor triple Shot con maní 60gr",
        price: 1200,
        img: "/imgs/alfajor-trishot.jpg",
        cantidad: 1,
        stock: 50, 
        description:"La Opción Número 1 Para Los Amantes Del Chocolate Con Maní. MARCA: SHOT. SIN TACC: NO"
    },
    {
        id: 5,
        category: "alfajor",
        title: "Alfajor triple Aguila 71gr",
        price: 1600,
        img: "/imgs/alfajor-aguila.jpg",
        cantidad: 1,
        stock: 50, 
        description:"Alfajor Minitorta Brownie Aguila 71g. MARCA: AGUILA"
    },
    {
        id: 6,
        category: "chocolate",
        title: "Chocolate Cofler con almendras 55gr",
        price: 2400,
        img: "/imgs/chocolate-cofler-almendras.jpg",
        cantidad: 1,
        stock: 50, 
        description:"MARCA: COFLER. SIN TACC: NO"
    },
    {
        id: 7,
        category: "chocolate",
        title: "Chocolate Cofler con Rocklets 55gr",
        price: 2400,
        img: "/imgs/chocolate-cofler-rocklets.jpg",
        cantidad: 1,
        stock: 50, 
        description:"Chocolate Con Rocklets Cofler 55g. MARCA: COFLER. SIN TACC: NO"
    },
    {
        id: 8,
        category: "chocolate",
        title: "Chocolate Cofler Block 300gr",
        price: 7400,
        img: "/imgs/chocolate-cofler-block.jpg",
        cantidad: 1,
        stock: 50, 
        description:"Chocolate Con Mani Block Cofler 300g. MARCA: COFLER. SIN TACC: NO"
    },
    {
        id: 9,
        category: "chocolate",
        title: "Chocolate Cofler tres placeres 55gr",
        price: 2400,
        img: "/imgs/chocolate-cofler-tres-placeres.jpg",
        cantidad: 1,
        stock: 50, 
        description:"Chocolate con 3 tipos de chocolate Cofler 67g. MARCA: COFLER. SIN TACC: NO"
    },
    {
        id: 10,
        category: "chocolate",
        title: "Chocolate Cofler Bon o Bon 67gr",
        price: 3900,
        img: "/imgs/chocolate-cofler-bonobon.jpg",
        cantidad: 1,
        stock: 50, 
        description:"Chocolate Con Bon o Bon Cofler 67g. MARCA: COFLER. SIN TACC: NO"
    },
    {
        id: 11,
        category: "snack",
        title: "Papas fritas Queso y Cebolla 77 gr",
        price: 3150,
        img: "/imgs/papas-fritas-lays-queso-cebolla.jpg",
        cantidad: 1,
        stock: 50, 
        description:"Papas Fritas Sabor Queso Crema Y Cebolla Lays 34g. MARCA: LAYS"
    },
    {
        id: 12,
        category: "snack",
        title: "Papas fritas Jamón serrano Lays 77 gr",
        price: 3150,
        img: "/imgs/papas-fritas-lays-jamon-serrano.jpg",
        cantidad: 1,
        stock: 50, 
        description:"Papas Fritas Jamón Serrano Lays 77g. MARCA: LAYS"
    },
    {
        id: 13,
        category: "snack",
        title: "Papas fritas sabor Ketchup Lays 77 gr",
        price: 2950,
        img: "/imgs/papas-fritas-lays-ketchup.jpg",
        cantidad: 1,
        stock: 50, 
        description:"Papas Fritas Sabor Ketchup Lays 77g. MARCA: LAYS"
    },
    {
        id: 14,
        category: "snack",
        title: "Papas fritas acanaladas Pehuamar 485 gr",
        price: 8500,
        img: "/imgs/papas-fritas-pehuamar-acanaladas.jpg",
        cantidad: 1,
        stock: 50, 
        description:"Papas Fritas Acanaladas Pehuamar 485g. MARCA: PEHUAMAR"
    },
    {
        id: 15,
        category: "snack",
        title: "Papas fritas clasicas Pehuamar 485 gr",
        price: 8500,
        img: "/imgs/papas-fritas-pehuamar-clasica.jpg",
        cantidad: 1,
        stock: 50, 
        description:"Papas Fritas Lisa Pehuamar 485g. MARCA: PEHUAMAR"
    },
    {
        id: 16,
        category: "pizza",
        title: "Pizza Mozzarella 2 und Sibarita 940gr",
        price: 18000,
        img: "/imgs/pizza1.jpg",
        cantidad: 1,
        stock: 50, 
        description:"Pizza Mozzarella 2u Sibarita 940g. MARCA: SIBARITA"
    },
    {
        id: 17,
        category: "pizza",
        title: "Pizza Mozzarella XL Sibarita 680gr",
        price: 13300,
        img: "/imgs/pizza2.jpg",
        cantidad: 1,
        stock: 50, 
        description:"Pizza Mozzarella Xl Sibarita 680g. MARCA: SIBARITA"
    },
    {
        id: 18,
        category: "pizza",
        title: "Pizza Mozzarella clásica Sibarita 470gr",
        price: 9500,
        img: "/imgs/pizza3.jpg",
        cantidad: 1,
        stock: 50, 
        description:"Pizza Mozzarella Clásica Sibarita 470g. MARCA: SIBARITA"
    },
    {
        id: 19,
        category: "pizza",
        title: "Pizza Mozzarella y jamón Sibarita 530gr",
        price: 13300,
        img: "/imgs/pizza4.jpg",
        cantidad: 1,
        stock: 50, 
        description:"Pizza Mozzarella Y Jamón Sibarita 530g. MARCA: SIBARITA"
    },
    {
        id: 20,
        category: "pizza",
        title: "Pizza Mozzarella y Pepperoni 510gr",
        price: 12500,
        img: "/imgs/pizza5.jpg",
        cantidad: 1,
        stock: 50, 
        description:"Pizza Mozzarella y Pepperoni 510gr. MARCA: SIBARITA"
    }
]

export default products