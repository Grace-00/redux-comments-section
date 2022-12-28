export const isCurrentUser = (currentUser: string | undefined = 'current user is undefined', username: string) => {
    return currentUser === username
  }