package jp.co.sample.salse.flayer.service;

import java.util.ArrayList;
import java.util.List;

import jp.co.sample.UserMasterEntity;
import jp.co.sample.common.Dao;
import jp.co.sample.salse.flayer.dto.LGIP000001InDTO;
import jp.co.sample.salse.flayer.dto.LGIP000001OutDTO;

public class LGIP000001Service {

	Dao dao = new Dao();

	/**
	 * 社員存在チェック
	 * @param indto
	 * @return
	 */
	public LGIP000001OutDTO init(LGIP000001InDTO indto) {
		// 戻り値の準備
		LGIP000001OutDTO outdto = new LGIP000001OutDTO();

		// DBからデータ取得準備
		UserMasterEntity entity = new UserMasterEntity();
		// 入力された社員ＩＤ
		entity.setId(indto.getLoginUser());
		// パスワード
		entity.setPass(indto.getLoginPswd());
		// DBからのデータ取得用Entity
		List<UserMasterEntity> entityList = new ArrayList<UserMasterEntity>();
		// DB接続
		entityList = dao.selectByValue(entity);
		// データが取得できた場合
		if(entityList.size() > 0) {
			outdto.setCheckVal("OK");
			outdto.setId(entityList.get(0).getId().trim());
			outdto.setName(entityList.get(0).getName().trim());
			outdto.setAuth(entityList.get(0).getAuthority().trim());
		} else {
			// データが取得できない場合
			outdto.setCheckVal("NG");
			outdto.setId("");
			outdto.setName("");
			outdto.setAuth("");
		}
		return outdto;
	}

}
