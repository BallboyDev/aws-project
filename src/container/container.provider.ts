import Docker from 'dockerode'

export const ContainerProvider = {
    provide: 'CONTAINER',
    useFactory: () => new Docker({ socketPath: '' })
}