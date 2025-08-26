import { useParams } from "react-router";
import { useGetSearchedSongsQuery } from "../services/songApi";
import SongCard from "../components/SongCard";

const SearchResult = () => {
  const { searchText } = useParams();
  const { data } = useGetSearchedSongsQuery(searchText!);

  return (
      <section className="mb-12 mt-4 px-2">
        <h2 className="text-2xl font-semibold mb-4 text-primary py-2">Search Results...</h2>
        <div className="divide-y divide-gray-700">
          {data && data?.results?.length > 0 ? (
            data?.results?.map((song, idx) => (
              <SongCard song={song} key={idx} idx={idx} />
            ))
          ) : (
            <p className="text-center text-primary">No Results found...</p>
          )}
        </div>
      </section>
  );
};

export default SearchResult;
