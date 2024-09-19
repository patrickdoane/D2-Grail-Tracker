import { useQuery } from '@tanstack/react-query';

function QueryArea() {
  const { isPending, error, data } = useQuery({
    queryKey: ['items'],
    queryFn: () =>
      fetch('http://localhost:8080/api/items').then((res) => {
        return res.json();
      }
      ),
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occured: ' + error.message;

  return (
    <div className="query-items">
      {data.map(item => {
        return (
        <div key={item.id}><p>{item.name}</p></div>
        )
      })}
    </div>
  )
}

export default QueryArea;