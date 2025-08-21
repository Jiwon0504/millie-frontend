import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="millie-container">
      {/* Top Navigation */}
      <nav className="top-nav">
        <div className="nav-left">
          <Link href="/" className="logo-link">
            <div className="logo">
              <Image 
                src="/millie-logo.png" 
                alt="밀리의서재" 
                width={32} 
                height={32}
                className="logo-image"
              />
              <span className="logo-text">밀리의서재</span>
            </div>
          </Link>
        </div>
        <div className="nav-center">
          <Link href="/" className="nav-item">투데이</Link>
          <Link href="#" className="nav-item">웹소설</Link>
          <Link href="/search" className="nav-item active">검색</Link>
          <Link href="#" className="nav-item">피드</Link>
          <Link href="/library" className="nav-item">내서재</Link>
          <Link href="/management" className="nav-item">관리</Link>
        </div>
        <div className="nav-right">
          <div className="notification-icon">🔔</div>
          <button className="login-btn">로그아웃</button>
        </div>
      </nav>

      {/* Search Content */}
      <main className="search-content">
        <div className="search-container">
          
          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button className="filter-tab active">전체</button>
            <button className="filter-tab">AI 추천</button>
          </div>

          {/* Search Bar */}
          <div className="search-bar-container">
            <div className="search-input-wrapper">
              <div className="search-icon">🔍</div>
              <input 
                type="text" 
                placeholder="검색어를 입력하세요"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          {/* Age Filter */}
          <div className="age-filter">
            <span className="age-label">7 나이</span>
            <span className="age-arrow">▼</span>
          </div>

          {/* Millie Recommended Keywords */}
          <div className="search-section">
            <h3>밀리 추천 검색어</h3>
            <div className="keyword-tags">
              <span className="keyword-tag">영어 필사</span>
              <span className="keyword-tag">가정법</span>
              <span className="keyword-tag">전월세 계약</span>
              <span className="keyword-tag">세계 경제 시장 변동</span>
              <span className="keyword-tag">TOEIC</span>
              <span className="keyword-tag">한국사</span>
              <span className="keyword-tag">세계사</span>
              <span className="keyword-tag">부동산</span>
              <span className="keyword-tag">일본어</span>
              <span className="keyword-tag">주식</span>
              <span className="keyword-tag">챗GPT</span>
              <span className="keyword-tag">영어 상승</span>
              <span className="keyword-tag">사랑과 철학</span>
              <span className="keyword-tag">초예은</span>
              <span className="keyword-tag">둠비공포라디오</span>
              <span className="keyword-tag">J기 측정대</span>
              <span className="keyword-tag">이달의 밈고</span>
              <span className="keyword-tag">따뜻만 경제상식</span>
            </div>
          </div>

          {/* Quick Access */}
          <div className="search-section">
            <h3>바로가기</h3>
            <div className="quick-access-grid">
              <Link href="/">
                <div className="quick-access-item">
                  <div className="quick-icon">👑</div>
                  <span>밀리 랭킹</span>
                </div>
              </Link>
              <div className="quick-access-item">
                <div className="quick-icon">⏰</div>
                <span>새로 들어온 책</span>
              </div>
              <div className="quick-access-item">
                <div className="quick-icon">📅</div>
                <span>공개 예정</span>
              </div>
              <div className="quick-access-item">
                <div className="quick-icon">➕</div>
                <span>좋은 예상</span>
              </div>
            </div>
            <div className="quick-access-item-single">
              <div className="quick-icon">👁️</div>
              <span>패밀리 리뷰지</span>
            </div>
          </div>

          {/* Book Recommendation Banner */}
          <div className="book-banner">
            <div className="banner-text">
              <h4>※절대 혼자 듣지 마세요</h4>
              <p>화제의 공포 소설 모디오북 오픈</p>
            </div>
            <div className="banner-book">
              <div className="book-cover-banner">📕</div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="category-tabs">
            <button className="category-tab active">카테고리</button>
            <button className="category-tab">웹소설</button>
            <button className="category-tab">오디오</button>
            <button className="category-tab">작가</button>
            <button className="category-tab">컬렉션</button>
          </div>

          {/* Categories */}
          <div className="categories-section">
            <h3>카테고리</h3>
            <div className="categories-grid">
              <div className="category-item">
                <div className="category-cover purple">📚</div>
                <div className="category-info">
                  <h4>도슨트북</h4>
                  <p>소문이 모무덤이 해설까지, 도슨트와 함께 읽는 책</p>
                </div>
              </div>
              <div className="category-item">
                <div className="category-cover blue">🌊</div>
                <div className="category-info">
                  <h4>오브제북</h4>
                  <p>읽지를 넘어 이용나도 그리고 읽어을 향해 감상하는 책</p>
                </div>
              </div>
              <div className="category-item">
                <div className="category-cover orange">📖</div>
                <div className="category-info">
                  <h4>챗북</h4>
                  <p>책말플레이 몰입 몸에 소문, 소프, 콘텐츠 의뢰형 시리즈 등</p>
                </div>
              </div>
              <div className="category-item">
                <div className="category-cover green">🏃</div>
                <div className="category-info">
                  <h4>독립출판</h4>
                  <p>기획부터 출판까지, 내 손으로 직접 만든 개성 있는 책</p>
                </div>
              </div>
              <div className="category-item">
                <div className="category-cover pink">🎭</div>
                <div className="category-info">
                  <h4>밀리 오리지널</h4>
                  <p>밀리가 기획하고 발굴한, 밀리만의 책</p>
                </div>
              </div>
              <div className="category-item">
                <div className="category-cover yellow">🎬</div>
                <div className="category-info">
                  <h4>빨간펜 동화</h4>
                  <p>아이돌, 아이돌 함께 즐길 추가 동화의 시간</p>
                </div>
              </div>
              <div className="category-item">
                <div className="category-cover teal">🎪</div>
                <div className="category-info">
                  <h4>디즈니</h4>
                  <p>디즈니 픽사, 마블의 책이 보이는 명작 오디오북 ©Disney</p>
                </div>
              </div>
              <div className="category-item">
                <div className="category-cover gray">📰</div>
                <div className="category-info">
                  <h4>매거진</h4>
                  <p>경제/정치, 패션/트렌드, 대중문화, 인문/예술, 라이프/라이프스타일 등</p>
                </div>
              </div>
              <div className="category-item">
                <div className="category-cover red">💕</div>
                <div className="category-info">
                  <h4>만화</h4>
                  <p>인문/교양, 웹상/드라마, 이영아/청소년, 그래픽노블</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

