import { NavLink } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";

import * as MOCK from "./links.mock.json";
import { TextFieldComponent } from "../TextField";
import { ButtonComponent } from "../Button";

export const ListCollunComponent = () => {
  return (
    <>
      <ul data-testid="list-colunCompany">
        <h2
          data-testid="title-colunCompany"
          className="mb-6 text-sm font-semibold text-white uppercase"
        >
          {MOCK.company.title}
        </h2>

        {MOCK.company.list_links.map((links) => (
          <li data-testid="links-colunCompany">
            <NavLink target="_self" className="text-gray-100" to={links.url}>
              {links.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul data-testid="list-colunHelp">
        <h2
          data-testid="title-colunHelp"
          className="mb-6 text-sm font-semibold text-gray-100 uppercase"
        >
          {MOCK.help.title}
        </h2>
        {MOCK.help.links_get_help.map((links) => (
          <li data-testid="links-colunHelp">
            <NavLink target="_self" className="text-gray-100" to={links.url}>
              {links.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul data-testid="list-colunOlineStore">
        <h2
          data-testid="title-colunOnlineStore"
          className="mb-6 text-sm font-semibold text-white uppercase"
        >
          {MOCK.onlineStore.title}
        </h2>
        {MOCK.onlineStore.links_online_store.map((links) => (
          <li data-testid="links-colunOlineStore">
            <NavLink target="_self" className="text-gray-100" to={links.url}>
              {links.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul data-testid="list-colunSubscribe">
        <h2
          data-testid="title-colunSubscribe"
          className="mb-6 text-sm font-semibold text-gray-100 uppercase"
        >
          {MOCK.subscribe.title}
        </h2>
        <li data-testid="input-colunSubscribe" className="mb-3">
          <TextFieldComponent placeholder="Digite seu e-mail" />
        </li>
        <li data-testid="button-colunSubscribe">
          <ButtonComponent text={"Subscrever"} />
        </li>
        <li
          data-testid="links-colunSubscribe"
          className="flex flex-row gap-6 mt-4"
        >
          {MOCK.subscribe.links_social.map((links) => (
            <>
              <NavLink
                data-testid="iconFacebook-colunSubscribe"
                target="_blank"
                className="text-gray-100 border rounded-full p-2"
                to={links.urlFacebook}
              >
                <BsFacebook />
              </NavLink>
              <NavLink
                data-testid="iconInstagram-colunSubscribe"
                target="_blank"
                className="text-gray-100 border rounded-full p-2"
                to={links.urlInstagram}
              >
                <BsInstagram />
              </NavLink>
            </>
          ))}
        </li>
      </ul>
    </>
  );
};
