export const hoverFunc = () => {
  return `
    @media (hover: hover) {
      &:hover {
        filter: brightness(85%);
      }
    }
  `;
};
