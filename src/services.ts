// Import all services
import {SampleService} from './services/sample.service';
import {WikiService} from "./services/wiki.service";

// Export all services
export * from './services/sample.service';
export * from './services/wiki.service';

// Export convenience property
export const PROVIDERS: any[] = [
  SampleService,
  WikiService
];
