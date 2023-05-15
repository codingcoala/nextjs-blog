import useSWR from 'swr'

function getBoredTask() {
  const { data, error, isLoading } = useSWR('https://www.boredapi.com/api/activity?participants=1', fetcher)
  if (error) return "Error";
  if (isLoading) return "Loading";
  return (
  <p className={utilStyles.p} key={data.key}>
    <strong>Activity:</strong> {data.activity}
    <br />
    <strong>Price:</strong> {data.price}
    <br />
    <strong>Type:</strong> {data.type}
</p>);
}