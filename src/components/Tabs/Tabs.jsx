import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={cn(
              { 'is-active': tab.id === (
                (tabs.find(tabCurr => tabCurr.id === selectedTabId)
                || tabs[0]).id
              ) },
            )}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              onClick={() => {
                if (selectedTabId !== tab.id) {
                  onTabSelected(tab);
                }
              }}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {(tabs.find(tab => tab.id === selectedTabId) || tabs[0]).content}
    </div>
  </div>
);
