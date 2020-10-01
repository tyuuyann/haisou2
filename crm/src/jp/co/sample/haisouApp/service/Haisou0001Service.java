package jp.co.sample.haisouApp.service;

import java.util.ArrayList;
import java.util.List;

import jp.co.sample.CustInfoEntity;
import jp.co.sample.MapInfoEntity;
import jp.co.sample.SkjEntity;
import jp.co.sample.common.Dao;
import jp.co.sample.haisouApp.dto.Haisou0001MapInfoOutDTO;
import jp.co.sample.haisouApp.dto.Haisou0001OutDTO;
import jp.co.sample.haisouApp.dto.Haisou0001SkjInDTO;
import jp.co.sample.haisouApp.dto.Haisou0001SkjOutDTO;

public class Haisou0001Service {

	Dao dao = new Dao();

	/**
	 * マップ
	 *
	 * @return
	 */
	public Haisou0001MapInfoOutDTO getMapInfoService() {
		Haisou0001MapInfoOutDTO outdto = new Haisou0001MapInfoOutDTO();

		// DBからデータ取得準備
		MapInfoEntity entity = new MapInfoEntity();
		// DBからのデータ取得用Entity
		List<MapInfoEntity> entityList = new ArrayList<MapInfoEntity>();
		// DB接続
		entityList = dao.selectByValue(entity);
		// データが取得できた場合
		if (entityList.size() > 0)
			outdto.setMapInfoList(entityList);

		return outdto;
	}

	/**
	 * 顧客リスト取得
	 *
	 * @param indto
	 * @return
	 */
	public Haisou0001OutDTO getCustInfoListService() {
		// 戻り値の準備
		Haisou0001OutDTO outdto = new Haisou0001OutDTO();

		// DBからデータ取得準備
		CustInfoEntity entity = new CustInfoEntity();
		// DBからのデータ取得用Entity
		List<CustInfoEntity> entityList = new ArrayList<CustInfoEntity>();
		// DB接続
		entityList = dao.selectByValue(entity);
		// データが取得できた場合
		if (entityList.size() > 0) {
			try {
				outdto.setCustInfoList(entityList);

			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return outdto;
	}

	/**
	 * 顧客リスト取得
	 *
	 * @param indto
	 * @return
	 */
	public Haisou0001SkjOutDTO getSkjListService(Haisou0001SkjInDTO indto) {
		// 戻り値の準備
		Haisou0001SkjOutDTO outdto = new Haisou0001SkjOutDTO();

		// DBからデータ取得準備
		SkjEntity entity = new SkjEntity();
		entity.setYear(indto.getYear());
		entity.setMonth(indto.getMonth());
		// DBからのデータ取得用Entity
		List<SkjEntity> entityList = new ArrayList<SkjEntity>();
		// DB接続
		entityList = dao.selectByValue(entity);
		// データが取得できた場合
		if (entityList.size() > 0) {
			try {
				outdto.setSkjList(entityList);

			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return outdto;
	}
}
