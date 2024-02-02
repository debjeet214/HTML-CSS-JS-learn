/*
  Unfortunately, fetch() API alone doesn't allow to cancel a fetch request once started. To cancel a fetch request you need an additional tool AbortController.
  A) Before starting the request, create an abort controller instance: controller = new AbortController().

  B) When starting the request properly, use the options argument of fetch(url, { signal: controller.signal }) and set signal property to be controller.signal.

  C) Finally, if you need to cancel the request, just call controller.abort() method.
*/


let controller = null;

fetchMoviesButton.addEventListener('click', async () => {
  controller = new AbortController();
  try {
    const response = await fetch('/movies', { 
      signal: controller.signal 
    });
  } catch (error) {
    console.log('Fetch error: ', error);
  }
  controller = null;
});

cancelFetchButton.addEventListener('click', () => {
  if (controller) {
    controller.abort();
  }
});
