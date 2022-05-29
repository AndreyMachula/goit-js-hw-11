import { Report } from 'notiflix/build/notiflix-report-aio';

export default function onFetchError() {
  Report.failure(
    'Failure',
    "Sorry, there are no images matching your search query. Please try again.",
    'Okay',
  );
};