const GOOGLE_API_KEY="AIzaSyA_NBoLdcfgtCZBTgKKcX7yF-3Lw70ZFnU";


export const YT_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

// const GOOGLE_API_KEY=process.env.REACT_APP_GOOGLE_API_KEY

export const YT_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YT_COMMENT_API="https://youtube.googleapis.com/youtube/v3/commentThreads?key="+GOOGLE_API_KEY;

export const SINGLE_COMMENT_API="https://youtube.googleapis.com/youtube/v3/comments?key="+GOOGLE_API_KEY;