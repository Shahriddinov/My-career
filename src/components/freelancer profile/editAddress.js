import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import useStore from "../../StoreZustand/StoreZustand";
import GET from "../../API/GET";

const EditAddress = ({ toggle8, editAddress }) => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);

  const {
    FreelancLivingAddressHendler,
    FreelancRegionHendler,
    FreelancStreetHendler,
  } = useStore();

  const getCountries = async () => {
    try {
      const get = await GET.Countries();
      if (get.status === 200) {
        setCountries(get.data);
      } else {
        alert(get.statusText);
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <Modal isOpen={editAddress} toggle={toggle8} className="editAddressModal">
      <ModalBody>
        <div className="edit-address">
          <div className="all-r-l-input">
            <div className="right-input">
              <label className="mt-4 label-style">Living address</label>

              <select
                onChange={(e) => {
                  FreelancLivingAddressHendler(e.target.value);
                  let dataRigions = countries?.data?.filter((v) => {
                    if (v.id == e.target.value) return v.regions;
                  });
                  setRegions(dataRigions);
                }}
                className="form-select  form-control inputs-all"
              >
                <option>Country</option>
                {countries?.data?.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="left-input">
              <div>
                <label className="mt-4 label-style">Region</label>

                <select
                  onChange={(e) => {
                    FreelancRegionHendler(e.target.value);
                  }}
                  className="form-select form-control inputs-all"
                >
                  <option>City</option>
                  {regions?.[0]?.regions?.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div>
            <label className="mt-4 label-style">Street, apartment</label>

            <input
              onChange={(e) => FreelancStreetHendler(e.target.value)}
              placeholder="Street, apartment"
              className="form-control inputs-all1"
              type="text"
            />
          </div>
        </div>
      </ModalBody>
      <ModalFooter className="mt-3">
        <Button onClick={toggle8}>Cancel</Button>
        <Button>Save</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditAddress;
