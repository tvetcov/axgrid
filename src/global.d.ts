declare namespace React {
    function lazy<T extends ComponentType<never>>(
        factory: () => Promise<{ default: T }>
    ): T;
}
