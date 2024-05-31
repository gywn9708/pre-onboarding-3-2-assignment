# 원티드 프리온보딩 프론트엔드 - Week 3 ~ 4

원티드 프리온보딩 **프론트엔드 8팀**의 `팔팔한 형제들`입니다.<br>

## 📅 프로젝트 기간

기간 : 2022년 11월 12일 ~ 2022년 11월 18일

## 팔팔한 형제들 팀 소개

### FE

<table>
  <tr>
    <td>
        <a href="https://github.com/CodyMan0">            
	    <img src="https://avatars.githubusercontent.com/u/93697790?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/shimeeuisuk">
            <img src="https://avatars.githubusercontent.com/u/104304569?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/jangth0655"> 
            <img src="https://avatars.githubusercontent.com/u/83333409?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/choi2021">
	    <img src="https://avatars.githubusercontent.com/u/80830981?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/strongsongky">
	    <img src="https://avatars.githubusercontent.com/u/102295416?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/gywn9708">
	    <img src="https://avatars.githubusercontent.com/u/107469939?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/YongHyunKwon">
	    <img src="https://avatars.githubusercontent.com/u/13326980?v=4" width="100px" />
        </a>
    </td>
  </tr>
  <tr>
    <td><b>이주영(팀장)</b></td>
    <td><b>심의석(부팀장)</b></td>
    <td><b>장태희</b></td>
    <td><b>최영준</b></td>
    <td><b>송경용</b></td>
    <td><b>강효주</b></td>
    <td><b>권용현</b></td>
  </tr>
  <tr>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
  </tr>
</table>

## 🛠 기술 스택

<div align=left> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/typescript-1572B6?style=for-the-badge&logo=typescript&logoColor=white">

   <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">

  <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white"> 
  
  <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">

  <img src="https://img.shields.io/badge/vs_code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
   <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
  <br>

</div>

## 🏁 프로젝트 실행 방법

1. 의존성 패키지를 설치합니다.

```zsh
$ npm install
```

2. 리눅스와 윈도우 husky 충돌 방지 후 사용을 위해 설치합니다.

```zsh
$ chmod ug+x .husky/*
```

3. 프로젝트를 실행합니다.

```zsh
$ npm run dev / yarn dev
```

## 👍 에러 해결 과정

### 문제 정의 : 새로 고침 및 동일한 PATH로 이동시 캐쉬 데이터가 사라지는 이슈 발생

초기 데이터 fetching 이후에 새로고침이나 동일한 path로 재접속할 경우, 리액트 쿼리의 캐쉬 데이터가 사라져 해당 키를 이용한 CRUD 기능이 UI로 반영되지 않는 이슈가 있었습니다.

<img src="https://user-images.githubusercontent.com/93697790/202516281-aee75db4-172e-4450-8833-2298902a8d5a.PNG" width="500px" />

### 해결 과정

cache되어야 할 데이터가 사려져 생긴 에러이기 때문에 이전 데이터를 보관하는 React Query의 keeppreviousdata를 true로 설정해보았지만 여전히 에러가 남아있었습니다. 다음으로 생각해본 방법은 react query의 기능 중 persistQueryClient를 이용해 localstorage에 데이터들을 저장하는 방법을 생각했습니다. 하지만 많은 데이터를 매번 localStorage에 저장하는 방법은 비효율적이라는 생각에 다른 방법을 찾아보았습니다.

블로그나 stackOverflow에서는 저희와 유사한 이슈를 찾을 수 없어, React Query github의 issue페이지를 검색해, 저희와 유사한 문제 상황을 담은 이슈를 찾을 수 있었습니다.
해당 문제는 SSR에서 같은 path로 이동 시에, react query가 페이지 이동을 인식하지 못해 생긴 문제로, queryClient 인스턴스를 \_app.tsx에서 컴포넌트 밖에 선언해 해결할 수 있었습니다.
<br><br>[깃허브 참조 이슈](https://github.com/TanStack/query/issues/2072)

## 👍 Best Practice 선정 이유

- SEO 측면을 생각하여 Next.js를 사용하였습니다.

```tsx
import Head from 'next/head';
import React from 'react';

export default function SEO({ text }: { text: string }) {
  return (
    <Head>
      <title>{text}</title>
      <meta name="description" content="마지막 과제입니다." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
```

- react-query의 useMutation을 활용하여 사용자 목록까지 CRUD 기능을 구현하였습니다.

```tsx
const userDeleteMutation = useMutation(
  async (userId: string) => {
    return infoService?.deleteUser(userId);
  },
  {
    onSuccess: () => {
      queryClient.invalidateQueries(['users', page]);
    },
  }
);
const settingDeleteMutation = useMutation(
  async (userId: string) => {
    return infoService?.deleteUserSetting(userId);
  },
  {
    onSuccess: () => {
      queryClient.invalidateQueries(['userSetting', 'all']);
    },
  }
);
const nameMutation = useMutation(
  async (info: { name: string; id: string }) => {
    return infoService?.patchUserName(info);
  },
  {
    onSuccess: () => {
      queryClient.invalidateQueries(['users', page]);
    },
  }
);
```

- axios-intercepter을 활용하여 토큰이 만료됐을 시, 로그인 페이지로 이동하도록 구현하였고 요청시엔 헤더에 넣어줌으로써 코드를 더욱 간결하게 구성하였습니다.

```tsx
export default class HttpClient {
  httpClient: AxiosInstance;
  constructor(private baseUrl: string) {
    this.httpClient = axios.create({
      baseURL: this.baseUrl,
    });
    this.httpClient.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error instanceof AxiosError) {
          const { response } = error;
          if (response) {
            const { status } = response;
            if (status === 401) {
              localStorage.removeItem(ACCESS_TOKEN);
              localStorage.removeItem(USER_ID);
              window.location.replace('/login');
            } else {
              throw new HTTPError(
                response?.status,
                response?.statusText,
                response.data
              );
            }
          }
        }
        throw new Error('Server Error');
      }
    );
  }
```

- 회원가입, 로그인 예외 처리를 하였습니다.

```tsx
export default class HTTPError extends Error {
  constructor(
    private statusCode: number,
    public message: string,
    private data?: string
  ) {
    super(message);
  }
  get signUpMessage() {
    if (this.statusCode === 400) {
      switch (this.data) {
        case SIGN_UP_MESSAGE.email:
          this.message = '이메일 형식이 올바르지 않습니다';
          break;
        case SIGN_UP_MESSAGE.password:
          this.message = '4자이상의 비밀번호를 입력해주세요';
          break;
        case SIGN_UP_MESSAGE.duplicate:
          this.message = '이미 존재하는 계정입니다';
          break;
        default:
          throw new Error('Unknown Error');
      }
      return this.message;
    }
    throw new Error('unknown Error');
  }
  get signInMessage() {
    switch (this.statusCode) {
      case 400:
        if (this.data === SIGN_IN_MESSAGE.password) {
          this.message = '비밀번호를 확인해주세요';
        } else if (this.data === SIGN_IN_MESSAGE.email) {
          this.message = '존재하지 않는 계정입니다';
        }
        break;
      case 404:
        this.message = '잘못된 요청입니다. url을 확인해주세요';
        break;
      default:
        throw new Error('Unknown Error');
    }
    return this.message;
  }
  get APIMessage() {
    switch (this.statusCode) {
      case 401:
        this.message = 'Access Token이 만료되었습니다.';
        break;
      default:
        throw new Error('Unknown Error');
    }
    return this.message;
  }
}
```
