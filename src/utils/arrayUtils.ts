interface Item {
  id: string;
}

export const findItemIndexById = <T extends Item>(items: T[], id: string) => {
  return items.findIndex((item: T) => item.id === id);
};

// override the target list with its updated version
export function overrideItemAtIndex<T>(
  array: T[],
  newItem: T,
  targetIndex: number
) {
  return array.map((item, index) => {
    if (index !== targetIndex) {
      return item;
    }

    return newItem;
  });
}
