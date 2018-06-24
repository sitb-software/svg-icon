export default ({...props} = {}) => (global as any).createSvgComponent({
  width: '200',
  height: '200',
  ...props,
  path: [{
    d: 'M1014.247619 373.080446l-3.527457-11.827356-3.734954-11.619858-4.14995-11.412361-4.149949-11.619858-4.564944-11.204863-4.979939-11.412361-4.97994-11.204863-5.602431-10.789868-5.602432-10.997366-6.017426-10.582371-6.224924-10.789868-6.847417-10.582371-6.847416-10.374873-7.262412-10.167376-7.469908-10.167376-7.884904-9.959878L916.72381 188.822695 908.216413 178.655319 899.50152 169.317933 890.786626 159.565552 881.241743 150.228166 872.111854 141.305775 862.359473 132.175887 852.607092 123.66849l-9.752381-8.299898-9.959878-8.092402-9.959879-7.884903-10.374873-7.469909L802.392705 84.658967 792.017832 77.81155 781.435461 71.171631l-10.789868-6.224924-10.789869-6.224924-10.997365-5.602431-10.997366-5.187437-11.204863-5.394934-11.204864-4.772442L704.038906 33.199595 692.419048 28.63465 680.799189 24.899696 669.179331 21.164742 657.351976 17.844782 645.317123 14.73232 633.28227 11.827356 621.039919 9.337386l-12.242351-2.074975-12.449848-2.074974-12.449848-1.452483-12.449848-1.452482-12.864843-1.037487-12.864843-0.622493L532.853495 0h-26.14468l-13.072341 0.622492-13.279838 0.622493-12.657345 1.037487-12.657346 1.452482-12.449848 1.452483-12.449848 2.074974-12.449848 2.074975-12.24235 2.48997-12.242351 2.904964-11.827356 3.112462-11.827355 3.31996-11.619858 3.734954-11.619858 3.734954-11.412361 4.564945-11.204863 4.564944-11.412361 4.772442-11.204863 5.394934-10.997366 5.187437-10.789868 5.602431-10.582371 6.224924-10.789868 6.224924-10.582371 6.639919-10.374874 6.847417-10.167375 7.262411-9.959879 7.469909-10.167376 7.884903-9.959878 8.092402-9.959879 8.299898-9.337386 8.507397-9.752381 9.129888-9.337386 8.922391-9.337386 9.337386-8.714893 9.752381-8.922391 9.337386-8.299899 10.167376-8.299899 9.544884-7.469909 9.959878-7.469908 10.167376-7.054914 10.167376-7.262412 10.374873-6.639919 10.582371-6.224924 10.789868-5.809929 10.582371-6.017426 10.997366-5.394934 10.789868-4.97994 11.204863-4.979939 11.412361-4.772441 11.204863-3.942452 11.619858-3.942452 11.412361-3.942452 11.619858-3.31996 11.827356-3.112462 11.827355-2.904964 12.242351-2.48997 12.242351-2.282472 12.034853-1.65998 12.657345-1.659979 12.449848-1.244985 12.657346-1.244985 13.07234-0.622492 12.657346-0.207498 12.864843L7.677406 510.858764l0.414995 13.07234 0.207498 13.279838 0.622492 12.864843 1.244985 12.657346 1.244985 12.864843 1.659979 12.449848 1.65998 12.449848 2.282472 12.24235 2.48997 12.242351 2.904964 12.24235 3.112462 12.242351 3.31996 11.619858 3.942452 11.619858 3.942452 11.827356 3.942452 11.412361 4.772441 11.41236 4.979939 11.412361 4.97994 11.204863 5.394934 10.997366 6.017426 10.789868 5.809929 10.997366 6.224924 10.582371 6.639919 10.582371 7.262412 10.789868 7.054914 10.167376 7.469908 10.167376 7.469909 10.167376 8.299899 9.75238 8.299899 9.959879 8.922391 9.752381 8.714893 9.544883 9.337386 9.544884 9.337386 9.129888 9.752381 8.922391 9.337386 8.714894 9.959879 8.092401 9.959878 8.092402 10.167376 7.884903 9.959879 7.469909 10.167375 7.262411 10.374874 6.847417 10.582371 6.639919 10.789868 6.224924 10.582371 6.224924 10.789868 5.602431 10.997366 5.602432 11.204863 4.979939 11.412361 4.979939 11.204863 4.357447 11.412361 4.564945 11.619858 3.942451 11.619858 3.527457 11.827355 3.31996 11.827356 3.112462 12.242351 2.904964 12.24235 2.48997 12.449848 2.074975 12.449848 1.867477 12.449848 2.074975 12.657346 1.037487 12.657345 1.037487 13.279838 0.622493 13.072341 0.622492h13.07234l18.467275-0.207497 18.052279-0.622493 17.844782-1.65998 17.844783-1.867477 17.429787-2.489969 17.014792-3.112462 17.22229-3.734955 16.3923-4.149949 16.3923-4.979939 16.184802-5.187437 15.977305-6.017427 15.56231-6.224924 15.354813-7.262411 15.354812-7.469909 14.939818-8.092401 14.73232-8.507396 9.959878-6.224924 9.752381-6.224924 9.337386-6.224924 8.714894-6.639919 8.714894-6.224924 8.092401-6.432422 7.884904-6.639919 7.469908-6.639919 6.847417-6.847416 6.847416-6.639919 6.224924-6.847416 6.017427-6.847417 5.602431-7.054914 5.394935-7.054913 4.564944-7.054914 4.772442-7.262412 3.942451-7.262411 3.942452-7.054914 3.31996-7.262411 3.112462-7.469909 2.904964-7.469909 2.282472-7.469909 2.074975-7.469909 1.452482-7.884903 1.244985-7.469909 1.037488-7.884904 0.414994-7.884904 0.207498-7.677406-0.207498-8.092401-0.414994-7.884904-1.037488-8.092401-1.244985-8.092401-1.452482-6.639919L920.666261 709.641337l-1.867477-6.224924-1.867477-6.639919-2.48997-6.224924-2.489969-6.017426-2.697467-5.809929-3.112462-6.017427-3.527457-5.602431-3.527457-5.602432-3.942452-5.602432-4.149949-5.394934-4.357447-4.979939-4.357447-4.979939-4.979939-4.979939-4.979939-4.97994-5.394935-4.564944-5.602431-4.564944-6.017427-4.357447-5.809929-4.357447-6.224924-3.942452-6.639919-4.149949-6.847416-3.734954-7.054914-4.14995-7.262411-3.319959-7.469909-3.527457-7.884904-3.31996-8.092401-3.112462-8.299899-3.319959-8.507396-3.112462-8.714894-2.697467-9.129888-2.904965-23.447214-8.092401 7.469909-4.357447 7.262411-4.564944 6.847417-4.772442 6.224924-4.979939 6.017426-5.394934 5.394934-5.187437 5.187437-5.602431 4.564944-6.017427 4.357447-5.809929 3.734954-6.432421 3.734955-6.432422 2.904964-6.639919 2.904965-6.847416 2.074975-6.847417 1.659979-7.262411 1.452483-7.469909 0.622492-8.714894 0.414995-8.092401-0.414995-8.507396-0.622492-8.507396-1.452483-8.092401-2.282472-8.092401-2.489969-7.884904-3.112462-8.092401-3.734955-7.677407-4.357447-7.884903-4.979939-7.884904-5.602431-7.469909-6.224924-7.469909-7.054914-7.469909-7.469909-7.262411-7.677406-7.054914-8.714894-7.677406-8.922391-7.054914-9.129889-6.639919-9.337386-6.224924-9.544883-6.017427-9.959879-5.602431-10.374873-4.979939-10.582371-4.97994-10.997366-4.357446-11.204863-4.357447-11.619858-3.734955-11.827356-3.527457-12.24235-3.112462-12.449848-3.112462-12.864843-2.489969-13.07234-2.074975-15.147316-2.282472-14.939817-1.867477-15.56231-1.452482-15.56231-1.452483-15.977305-1.037487-16.184803-1.037487-16.3923-0.622493-16.807294-0.414995-16.807295-0.207497-17.22229 0.207497h-17.429787l-17.844782 0.622493-18.259777 1.037487-18.259778 1.037487-18.674772 0.82999-18.674772 1.65998v161.433029l14.939818-1.867477 15.147315-1.867477 14.939818-1.244985 15.354812-1.244985 14.939818-0.82999 15.354812-0.829989L412.712462 414.994934h30.917123l15.147315 0.622493 15.769807 0.622492 15.56231 1.244985 15.56231 1.244985 15.769808 1.659979 15.769807 1.65998 15.977305 2.074975 12.864843 2.074974 12.242351 2.48997 11.204863 2.904965 10.582371 2.697467 9.752381 3.527457 9.129888 3.527456 8.299899 3.734955 7.469909 3.942452 3.527457 1.867477 3.112462 2.282472 3.112462 2.48997 2.697467 2.074974 2.904964 2.697467 2.282472 2.282473 2.48997 2.489969 1.867477 2.48997 1.867477 2.904964 1.867478 2.904965 1.659979 2.697467 1.037488 3.112462 1.037487 2.904964 0.82999 3.112462 0.82999 3.112462 0.414995 3.31996v5.809929l-0.414995 2.697467-0.82999 3.112462-2.282472 6.847417-3.527457 7.884903-2.282472 3.112462-2.48997 3.112462-2.697467 2.904965-3.527457 2.074975-3.319959 2.282472-3.734955 1.867477-4.149949 1.452482-4.357447 1.244985-4.772442 1.037487-5.187436 0.82999-5.394934 0.414995H605.477609l-6.224924-0.414995-6.639919-0.82999-7.262411-1.037487-18.674772-2.074975-18.467275-1.867477-18.259777-1.65998-18.259777-1.244984-17.844782-0.82999-17.637285-0.622493-17.844782-0.414995-17.637285-0.207497-17.22229 0.207497-17.014792 0.414995-17.22229 0.622493-17.014792 0.82999-16.3923 1.244984-16.599797 1.65998-16.3923 1.867477-16.184803 2.074975v164.752989l22.824722-2.48997 22.202229-2.489969 21.787234-1.867478 21.994731-1.659979 20.957244-0.82999 20.957245-1.037488 20.127254-0.207497h20.127254l19.71226 0.622492 19.297264 0.622493 18.674772 1.244985 18.467275 1.867477 18.259777 1.867477 17.844782 2.48997 17.014792 2.697467 17.014792 3.112462 13.487336 2.489969 12.449848 3.31996 11.827355 2.904964 10.997366 3.527457 10.167376 4.14995 9.544884 3.942451 4.357446 2.282473 3.942452 2.074974 4.14995 2.282472 3.734954 2.48997 3.527457 2.48997 3.319959 2.489969 3.112462 2.697467 2.697468 2.697467 2.904964 2.697467 2.48997 2.904965 2.074974 2.697467 2.282472 3.319959 1.867478 3.112462 1.659979 2.904965 1.452483 3.112462 1.037487 3.527457 1.244985 3.112462 0.622492 3.527457 0.622493 3.527457 0.622492 3.527457v2.904964l0.414995 3.112462-0.414995 3.112462v2.904965l-0.622492 2.904964-0.622493 2.904965-1.037487 3.112462-0.82999 2.904965-1.244985 3.112462-1.659979 2.904964-1.452483 3.112462-1.867477 3.112462-4.149949 6.224924-4.97994 6.224924-3.112462 3.734954-3.734954 3.31996-3.734954 3.527457-4.14995 3.112462-3.942452 3.112462-4.357446 3.112462-4.357447 2.904964-4.772442 2.697468-4.772442 2.904964-4.979939 2.48997-5.187437 2.489969-5.394934 2.48997-5.602431 2.282472-6.017427 2.074975-5.809929 1.867477-6.432421 1.867477-6.224924 1.867477-6.432422 1.65998-6.639919 1.452482-7.054914 1.244985-14.524822 2.48997-14.939818 2.282472-15.977305 1.452482-16.807295 1.452482-17.429787 0.622493h-28.219656l-9.752381-0.414995-9.544883-0.622493-9.752381-0.622492-9.337386-1.037487-9.337386-1.244985-9.129889-1.244985-9.337386-1.452482-9.129888-1.867477-8.922391-2.282472-8.714894-2.282473-8.922391-2.282472-8.714894-2.489969-8.714893-3.112462-8.507396-3.112462-8.507396-3.31996-8.299899-3.527457-8.507396-3.942452-8.092402-3.734954-8.092401-4.357447-7.884903-4.357447-7.677407-4.564944-7.884904-4.772442-7.884903-4.979939-7.469909-5.394934-7.469909-5.602432-7.469909-5.602431-7.469909-6.017427-7.262411-6.224924-7.054914-6.224924-7.054914-6.639919-7.054914-6.639919-6.639918-7.054914-6.639919-7.262411-6.432422-7.054914-6.224924-7.262411-6.017426-7.054914-5.602432-7.469909-5.602432-7.677406-5.394934-7.469909-4.979939-7.884904-4.979939-7.469909-4.772442-8.092401-4.357447-7.677406-3.942452-8.299899-4.149949-8.092401-3.734954-8.092401-3.734955-8.507396L165.375481 649.467072l-3.112462-8.922391-2.697467-8.299899-2.904964-8.922391-2.282472-8.714894-2.282473-8.714893-2.282472-9.129889-1.867477-8.922391-1.452482-9.129888-1.65998-9.337386-1.037487-9.337386-1.037488-9.544884-0.622492-9.337386-0.622492-9.544883-0.414995-9.752381v-19.504762l0.414995-9.544884 0.622492-9.752381 0.622492-9.337386 1.037488-9.337386 1.037487-9.337386 1.65998-9.129888 1.452482-9.337386 1.867477-8.714894 2.282472-9.129888 2.282473-8.714894 2.282472-9.129889 2.904964-8.299898 2.697467-8.922391 3.112462-8.299899 3.527457-8.507396 3.734955-8.507396 3.734954-8.092402 4.149949-8.092401 3.942452-8.092401 4.357447-8.092401 4.772442-7.884904 4.979939-7.884904 4.979939-7.469909 5.394934-7.677406 5.602432-7.677406 5.602432-7.469909 6.017426-7.054914 6.224924-7.262411 6.432422-7.054914 6.639919-7.262411 6.639918-7.054914 7.054914-6.639919 7.262412-6.639919 7.054914-6.224924 7.262411-6.224924 7.677406-6.017427 7.262412-5.602431 7.677406-5.602432 7.469909-5.394934 7.677406-4.979939 7.884904-4.97994 7.884903-4.564944 8.092402-4.357447 8.092401-4.564944 8.092401-3.942452 8.092401-3.734954 8.507396-3.527457 8.299899-3.527457 8.714894-3.112462 8.507396-3.112462 8.507396-2.48997 9.129889-2.489969 8.714893-2.48997 9.129889-1.867477 8.922391-1.867477 9.129888-1.65998 9.129889-1.452482 9.337386-1.244985 9.752381-1.037487 9.337386-0.622493 9.544883-0.622492 9.752381-0.207498 9.752381-0.207497 9.752381 0.207497 9.544884 0.207498 9.752381 0.622492 9.337386 0.622493 9.337386 1.037487 9.337386 1.244985 9.129888 1.452482 9.129889 1.65998 8.922391 1.867477 9.129889 1.867477 8.714893 2.48997 8.922391 2.489969 8.714894 2.48997 8.299899 3.112462 8.714893 3.112462 8.299899 3.527457 8.299899 3.527457 8.092401 3.734954 8.299898 3.942452 8.092402 4.564944 7.677406 4.357447 8.092401 4.564944 7.677406 4.97994 7.677407 4.979939 7.469909 5.394934 7.677406 5.602432 7.054914 5.602431 7.469908 6.017427 7.262412 6.224924 6.847416 6.224924 7.262412 6.639919 6.847416 6.639919 6.432421 7.054914 6.639919 6.847416 6.639919 7.262411 6.224924 7.054914 6.017427 7.262412 5.394934 7.469908 5.809929 7.469909 5.187437 7.469909 4.979939 7.884904 4.772442 7.884904 4.564944 7.884903 4.772442 7.884904 4.149949 7.884904 3.942452 8.507396 3.734954 8.092401 3.734955 8.507396 3.527457 8.299899 3.112462 8.507396 2.904964 8.714894 2.697467 8.714893 2.48997 8.714894 2.282472 8.922391 2.074975 8.922391 1.867477 9.129889 1.65998 8.922391 1.244985 9.544883 1.244984 9.337386 0.82999 9.337386 1.037488 9.337386 0.622492 9.752381 0.414995 9.544884v9.752381l-2.074975 41.291996 8.092401 4.979939 8.299899 4.772442 8.092401 5.187436 7.677407 5.394934 7.677406 5.602432 7.469909 5.602432 7.469909 5.602431 7.262411 6.224924 7.054914 6.432422 7.262411 6.224924 6.639919 6.432421 6.639919 6.639919 6.639919 7.054914 6.224924 6.847417 6.432421 7.677406 6.224924 7.469909 4.564945-17.22229',
    fill: '#E21F26'
  }]
});