export interface EntityState<T> {
  entities: T;
  isLoading: boolean;
  error: unknown;
}
