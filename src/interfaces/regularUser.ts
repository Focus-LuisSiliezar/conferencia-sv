export default interface RegularUser {
    id: number;
    attributes: {
      name: string;
      surname: string;
      slug: string;
      layout: string;
      isDarkMode: boolean;
      description: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }