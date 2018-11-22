import ModuleView from './ModuleView';
import {container} from "../core/ioc";
import HttpClient from './HttpClient';
import ModuleComponentStore from "./ModuleComponentStore";
import ApiService from './ApiService';

container.bind<HttpClient>(HttpClient).to(HttpClient);
container.bind<ApiService>(ApiService).to(ApiService);
container.bind<ModuleComponentStore>(ModuleComponentStore).to(ModuleComponentStore).inSingletonScope();

export default ModuleView;
