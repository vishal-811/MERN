## Selector family

Here we learn about selector family when we want to make an asynchronous call  in an atom family we will use this.
It is similar to selector but it allow us to pass parameters to get and set callbacks of the selector.

## useRecoilStateLoadable 
used when we are dealing with useRecoilState 
e.g: const [value , setValue] = useRecoilStateLoadable({id});
where we are doing any asynchronous work like making a backend call and all there we use, because when we make a backend call than inorder to fetch data it may take time until than we show loading instead of a white page, this is a good userExperience.
This provide us two main properties 
1. state
2. contents
if(value.state === 'loading') than show loading div...
if(value.state === 'hasValue') than show content like 
          <div>
             {value.contents.title}
          </div>

if(value.state === 'hasError') than show any error warning.

## useRecoilValueLoadable :
we use it when we are dealing with the value
  const value = useRecoilValueLoadable({id});

  Other than These Two hooks we can use ## Suspense Api ## also.
    <suspense fallback(loading...)/>