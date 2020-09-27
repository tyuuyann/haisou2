package jp.co.sample.haisouApp.controller;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import jp.co.sample.haisouApp.dto.Haisou0001OutDTO;
import jp.co.sample.haisouApp.dto.Haisou0001SkjInDTO;
import jp.co.sample.haisouApp.dto.Haisou0001SkjOutDTO;
import jp.co.sample.haisouApp.service.Haisou0001Service;

@Path("/haisou")
public class Haisou0001Controller {

	Haisou0001Service sampleService = new Haisou0001Service();
//
//	@GET
//	@Path("/login")
//	@Produces(MediaType.APPLICATION_JSON)
//	public LGIP000001InDTO hello() {
//		LGIP000001InDTO dto = new LGIP000001InDTO();
//		dto.setLoginUser("11111");
//		dto.setLoginPswd("11111");
//		return dto;
//	}

	@POST
	@Path("/custinfoList")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Haisou0001OutDTO getCustInfoListService() {
		Haisou0001OutDTO outdto = new Haisou0001OutDTO();

		outdto = sampleService.getCustInfoListService();

		return outdto;
	}
	@POST
	@Path("/skjList")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Haisou0001SkjOutDTO getSkjListService(Haisou0001SkjInDTO indto) {
		Haisou0001SkjOutDTO outdto = new Haisou0001SkjOutDTO();

		outdto = sampleService.getSkjListService(indto);

		return outdto;
	}
}
