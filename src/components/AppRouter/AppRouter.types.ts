import { Paths } from '../../types/Paths.types';

export interface IRoutes {
  path: Paths;
  element: any; // typescript cannot type this value
}
