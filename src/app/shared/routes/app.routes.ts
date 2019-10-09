export class AppRoutes {

  static generateRoutes() {

    return {
      public : {

        path: `public`,
        name: `public`,

        welcome: {
          name: `welcome`,
          path: `public/welcome`,
        },

        // about us
        about: {
          name: `about`,
          path: `public/about`,
        },

        // portfolio
        portfolio: {
          name: `portfolio`,
          path: `public/portfolio`
        },

        // contact us
        contact: {
          name: 'contact',
          path: `public/contact`
        },


      }
    }

  }
}
