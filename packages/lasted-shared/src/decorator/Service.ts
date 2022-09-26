import { IocContainer } from '../DependenciesContainer'

export function Service(alias?: string): ClassDecorator {
  return function (target) {
    IocContainer.register(target, alias || target.name)
    return target
  }
}
