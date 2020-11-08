# Angular Loading Strategies

Hey friend! Thanks for stopping by! This is basically a 101 on lazy vs pre-loading! Make sure you're familiar with the network tab :) 

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Branches

There are 2 ->
`lazy-loading` & `pre-loading`
You can start with lazy and analyse the app.module.ts file

#### -> Lazy loading
The default angular loading strategy is eager-loading - which means load everything you tell it to in the app.module. But thanks to the beauty of the browsers dynamic importing we can lazy load these modules on demand now! This saves loads of initial load time.   
Combined with intersection observe you can double if not triple your app loading time! (More on this if you have a look at my portfolio site [kapeesh.dev](https://github.com/kappy904/kapeesh.dev))

#### -> Pre-loading
Well let's pre-load EVERYTHING? No no, don't get this confused. This will only load the initial(first) routes to get the page up as soon as possible. It loads the other modules in the background while you're not looking ;) In this little app it's just the modules, but you can load component data too - have a look at [Angulars documentation](https://angular.io/guide/lazy-loading-ngmodules) for this.
