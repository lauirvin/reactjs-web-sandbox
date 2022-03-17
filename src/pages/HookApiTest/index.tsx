import useStarWarsDetails from './hooks/useStarWarsDetails';

const HookApiTest = (): JSX.Element => {
  const { characters, films } = useStarWarsDetails();

  return (
    <div>
      <h1>Characters</h1>
      {characters.map(({ name }) => (
        <p key={name}>{name}</p>
      ))}
      <h1>Films</h1>
      {films.map(({ title }) => (
        <p key={title}>{title}</p>
      ))}
    </div>
  );
};

export default HookApiTest;
