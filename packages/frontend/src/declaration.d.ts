declare module "*.png" {
    const value: string;
    export default value;
  }
  
  declare module "*.jpg" {
    const value: string;
    export default value;
  }
  
  declare module "*.jpeg" {
    const value: string;
    export default value;
  }
  
  declare module "*.svg" {
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const value: string;
    export { ReactComponent };
    export default value;
  }
  
  declare module "*.css" {
    const classes: { [key: string]: string };
    export default classes;
  }
  
  declare module "*.scss" {
    const classes: { [key: string]: string };
    export default classes;
  }
  
  