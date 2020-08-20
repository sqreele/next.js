// =============================================================================================================================
// INDEX TYPE DEFINITION
// =============================================================================================================================
// For SVG images.
declare module "*.svg" {
  import * as React from "react";

  const content: React.SVGFactory;
  export default content;
}

// For raster images.
declare module "*.jpg" {
  const content: string;
  export = content;
}
declare module "*.jpeg" {
  const content: string;
  export = content;
}
declare module "*.png" {
  const content: string;
  export = content;
}
declare module "*.gif" {
  const content: string;
  export = content;
}
