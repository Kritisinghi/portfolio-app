export interface Data {
    nav: { 
        menuItems: {id: string; name: string }[]
    };
    about: { 
        mainIntro: string; 
        secondaryIntro: string;
        contact: {
            name: string;
            location: string;
            phone: string;
            email: string;
        }
      };
    resume: any;
    skills: any;
    contact: any;
    footer: any;
  }